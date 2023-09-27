import React, { useEffect, useRef } from "react";

export default function Item(props) {
  const { index, measure } = props;
  const element = useRef(null);

  useEffect(() => {
    measureItem(index);

    return observe();
  }, []);

  // 监听高度变化
  const observe = () => {
    const resizeObserver = new ResizeObserver(() => {
      // 获取当前列表项的高度
      const el = element.current;
      if (el && el.offsetHeight) {
        // 触发更新
        measure(index, el.offsetHeight);
      }
    });
    resizeObserver.observe(element.current);

    return () => resizeObserver.disconnect();
  };

  // 初次渲染完成
  const measureItem = (index) => {
    const item = element.current;
    if (item?.clientHeight) {
      measure(index, item.clientHeight);
    }
  };

  return (
    <div index={index} className="list-item" ref={element}>
      {props.children}
    </div>
  );
}
