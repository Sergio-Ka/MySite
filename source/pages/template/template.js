require('webpack-jquery-ui/selectmenu');

const requireAllFiles = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

requireAllFiles(require.context('../../', true, /^\.\/.*\.(js|styl|css|png|jpg)$/));