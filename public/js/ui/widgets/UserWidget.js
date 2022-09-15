/**
 * Класс UserWidget отвечает за
 * отображение информации о имени пользователя
 * после авторизации или его выхода из системы
 * */

class UserWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    try {
      if (element) {
        this.element = element;
      } else {
        throw new Error('Передан пустой элемент в конструктор класса UserWidget');
      }
    } catch(e) {
      console.log(e);
    }
  }

  /**
   * Получает информацию о текущем пользователе
   * с помощью User.current()
   * Если пользователь авторизован,
   * в элемент .user-name устанавливает имя
   * авторизованного пользователя
   * */
  update() {
    let name = User.current().name;
    if (name) document.querySelector('.user-name').textContent = name;
  }
}
