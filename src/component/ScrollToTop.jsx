// 避免 react-router-dom routing 的時候導向新頁面不會從最上面開始
// https://v5.reactrouter.com/web/guides/scroll-restoration

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
