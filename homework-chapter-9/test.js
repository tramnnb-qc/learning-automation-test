/* Bài tập thực hành (Level: Real Automation)
 * Bài tập: Xây dựng cấu trúc Page Object Model (POM) đơn giản
    1. Tạo Class BaseElement:
    - Có thuộc tính selector.
    - Có phương thức click() (In ra: "Clicking on [selector]").

    2. Tạo Class Button kế thừa từ BaseElement:
    - Có thêm phương thức doubleClick().

    3. Tạo Class InputField kế thừa từ BaseElement:
    - Có thêm phương thức type(text) (In ra: "Typing [text] into [selector]").

    4. Thực thi: Tạo 1 Button "Submit" và 1 InputField "Username". 
    Thực hiện Click vào Button và gõ "admin" vào InputField.

 */

class BaseElement {
  constructor(selector) {
    this.selector = selector;
  }
  async click() {
    console.log(`Clicking on ${this.selector}`);
  }
}

class Button extends BaseElement {
  constructor(selector) {
    super(selector);
  }
  async doubleClick() {
    console.log(`Double clicking on ${this.selector}`);
  }
}

class InputField extends BaseElement {
  constructor(selector) {
    super(selector);
  }
  async type(text) {
    console.log(`Typing ${text} into ${this.selector}`);
  }
}

const submitButton = new Button("submit");
submitButton.click();
// submitButton.doubleClick();

const inputUsername = new InputField("Username");
inputUsername.type("admin");
