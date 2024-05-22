function foo(options = {}) {
  const defaultOptions = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  options = {
    ...defaultOptions,
    ...options,
  };
  console.log(options);
}

foo(); // 全部使用默认配置
foo({
  a: 100, // 仅配置a，其他使用默认配置
});
