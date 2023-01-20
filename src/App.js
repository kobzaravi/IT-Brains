// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 0;
const LIMIT_BALANCE = 10000;
const GET_MONEY = 100;

const SALARY_AMOUNT = 1000;
const COURSE_PRICE = 850;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => setBalance(balance + GET_MONEY);

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом

  // функціонал трансакцій

  const [payment, setPayment] = React.useState([]);

  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);
  };

  const buyCourse = () => {
    setBalance(balance - COURSE_PRICE);
  };

  const HelloWorld = () => alert("Привіт красунчику!");

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="STEEL ART BANK" onClick={HelloWorld} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      <Balance balance={balance} />

      {/* Компонент меню з кнопками */}
      <Menu
        // ось сюди ми передаємо конфігурацію кнопок
        config={[
          {
            name: "Поповнити баланс",
            onClick: getMoney,
            img: "/icon/coine.svg"
          },
          {
            name: "Отримати зарплату",
            onClick: getSalary,
            img: "/icon/cash.svg"
          },
          {
            name: "Купити курс",
            onClick: buyCourse,
            img: "/icon/robot.svg"
          }
        ]}
      />
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      <Payment payment={payment} />
    </Page>
  );
}
