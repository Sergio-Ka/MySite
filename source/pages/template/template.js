require('webpack-jquery-ui/datepicker');
require('webpack-jquery-ui/selectmenu');
require('webpack-jquery-ui/slider');

const requireAllFiles = function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
};

requireAllFiles(require.context('../../', true, /^\.\/.*\.(js|styl|css|png|jpg)$/));