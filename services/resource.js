const qs = require('qs');
const Promise = require("bluebird");
const rp = require('request-promise');

const isObject = (subject) => {
  return !!subject && typeof subject === "object";
}

const formatPaginationUrls = (pageCount, baseUrl, defaultParams,) => {
  const urls = [];

  for (let i = 0; i < pageCount; i++) {
    // create the url by merging the base url and the pagination paramters and the default params
    urls.push(`?${qs.stringify(Object.assign(defaultParams, {
      page: i
    }))}`);
  }

  return urls;
}

export const getResources = async (siteId, resource, queryObject, currentPathname, appId) => {
  const apiUrl = process.env.API;
  // Get the pageSize
  const pageSize = 30;

  // Get sorting, default to newest first
  const defaultSort = 'createdate_desc';

  const queryFilters = queryObject.filters && isObject(queryObject.filters) ? queryObject.filters : {};

  const queryElements = queryObject.queryElements && isObject(queryObject.queryElements) ? queryObject.queryElements : {};

  //format the pagination, theme, vote and other query paramters
  const params = {
    page: queryObject.page ? queryObject.page : 0,
    pageSize: pageSize,
    includeUserVote: 1,
    // include vote count per resource
    includeVoteCount: 1,
    includeArgsCount: 1,
    sort: queryObject.sort ? queryObject.sort : defaultSort,
    tags: queryObject.oTags ? queryObject.oTags : '',
    filters: {
      theme: queryObject.theme ? queryObject.theme : '',
      area: queryObject.area ? queryObject.area : '',
      ...queryFilters
    },
    ...queryElements
  };

  if (queryObject.search) {
    params.search = {
      "criteria": [
        {
          "title": queryObject.search
        },

      ],
      "options": {
        "andOr": "and"
      }
    };
  }


  const apiBase = appId ? `/api/site/${siteId}/app/${appId}/${resource}` : `/api/site/${siteId}/${resource}`;
  // format string
  const getUrl = `${apiBase}?${qs.stringify(params)}`;
  
  //const cacheKey = encodeURIComponent(getUrl);

  const options = {
    uri: `${apiUrl}${getUrl}`,
    headers: { 'Accept': 'application/json', "Cache-Control": "no-cache" },
    json: true
  };

  const response = rp(options);

  const formattedResources = {};

  formattedResources.paginationIndex = response.metadata.page + 1;
  formattedResources.totalItems = response.metadata.totalCount;
  formattedResources.paginationUrls = self.formatPaginationUrls(response.metadata.pageCount, currentPathname, queryParams);
  // formattedResources.formattedResultCountText = widget.resultCountText ? widget.resultCountText.replace('[visibleCount]', response.records.length).replace('[totalCount]', response.metadata.totalCount) : '';
  // formattedResources.formattedSearchText = widget.searchText && queryParams.search ? widget.searchText.replace('[searchTerm]', queryParams.search) : '';
  formattedResources.resources = response.records ? response.records.map((record) => {
    return record;
  }) : [];


}


