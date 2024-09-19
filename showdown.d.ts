declare module 'showdown' {
    // 如果你想进一步自定义类型，可以在这里添加具体类型
    export class Converter {
      constructor();
      makeHtml(markdown: string): string;
    }
  }
  