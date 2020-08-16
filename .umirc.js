// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: "hash",
  base: "/30-seconds-of-react-demo/",
  publicPath: "/30-seconds-of-react-demo/",
  outputPath: "../heibaimeng/30-seconds-of-react-demo/",
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      "umi-plugin-react",
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: "30-seconds-of-react-Zh-CN-with-demo",
        dll: false,

        routes: {
          // 路由排除指定目录
          exclude: [/components\//],
        },
      },
    ],
  ],
};
