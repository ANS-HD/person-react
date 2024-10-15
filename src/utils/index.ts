import { message } from 'antd';
export { default as Request } from './request'

export const copyToClipboard = (text: string) => {
    // 实测 Clipboard API 在 iPhone 上不支持，可恶！
    if (navigator.clipboard) {
      navigator.clipboard
        // 去除首尾空白字符
        .writeText(text?.trim())
        .then(() => {
            message.success("已复制到粘贴板");
        })
        .catch((error) => {
          message.error(error as string);
        });
    } else {
      // 以下代码来自：https://www.zhangxinxu.com/wordpress/2021/10/js-copy-paste-clipboard/
      const textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      // 隐藏此输入框
      textarea.style.position = "fixed";
      textarea.style.clip = "rect(0 0 0 0)";
      textarea.style.top = "10px";
      // 赋值，手动去除首尾空白字符
      textarea.value = text?.trim();
      // 选中
      textarea.select();
      // 复制
      document.execCommand("copy", true);
      message.success("已复制到粘贴板");
      // 移除输入框
      document.body.removeChild(textarea);
    }
  };