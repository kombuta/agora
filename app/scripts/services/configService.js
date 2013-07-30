'use strict';

agoraApp.factory('configService', function config(TITLE, DESC, API) {
  return {
    title: TITLE,
    desc: DESC,
    api: API
  };
});
