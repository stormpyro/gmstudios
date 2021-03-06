import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.min.css";
import Vue from "vue";

export const EventBus = new Vue();

const requireComponent = require.context(
  "./global-components",
  false,
  /global-[\w-]+\.vue$/
);

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(Vuesax);

  // Register all global-components
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);

    const componentName = fileName.substring(
      fileName.indexOf("-") + 1,
      fileName.indexOf(".vue")
    );
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};
