	function NAV_GT_callback(data) {
		document.dispatchEvent(new CustomEvent('CP_connectExtension', {
        detail: data
      }));
	}