document.addEventListener('DOMContentLoaded', function () {
  const validator = new JustValidate('#main-form')
  const validator2 = new JustValidate('#formContact')


  Inputmask('+7 (999) 999-99-99').mask(document.getElementById('tel1'));
  Inputmask('+7 (999) 999-99-99').mask(document.getElementById('tel2'));

  validator
    .addField('#square', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
      {
        rule: 'minNumber',
        value: 10,
        errorMessage: "Минимальное 10",
      },
      {
        rule: 'maxNumber',
        value: 100,
        errorMessage: "Максимальное 100",
      },
    ])
    .addField('#room', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
      {
        rule: 'minNumber',
        value: 1,
        errorMessage: "Минимальное 1",
      },
      {
        rule: 'maxNumber',
        value: 15,
        errorMessage: "Максимальное 15",
      },
    ])
    .addField('#rateRepair', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#whenRepair', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#formCity', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#name1', [
      {
        rule: 'required',
        errorMessage: "Обязательно"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Напишите правильно имя"
      },
      {
        rule: 'maxLength',
        value: 25,
        errorMessage: "Напишите правильно имя"
      },
    ])
    .addField('#tel1', [
      {
        validator: (value) => {
          const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length > 0);
        },
        errorMessage: 'Обязательно'
      },
      {
        validator: (value) => {
          const phone = document.getElementById('tel1').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Введите телефон полностью'
      },
    ])
    .onSuccess(async function () {
      let data = {
        square: document.getElementById("square").value,
        room: document.getElementById("room").value,
        rateRepair: document.getElementById("rateRepair").value,
        whenRepair: document.getElementById("whenRepair").value,
        formCity: document.getElementById("formCity").value,
        name1: document.getElementById("name1").value,
        tel1: document.getElementById("tel1").value
      }

      let responce = await fetch("php/sendmail.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json: charset=UTF-8" 
        }
      })

      let result = await responce.text()

      alert(result)
    });

  validator2
    .addField('#name2', [
      {
        rule: 'required',
        errorMessage: "Обязательно"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Напишите правильно имя"
      },
      {
        rule: 'maxLength',
        value: 25,
        errorMessage: "Напишите правильно имя"
      },
    ])

    .addField('#tel2', [
      {
        validator: (value) => {
          const phone = document.getElementById('tel2').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length > 0);
        },
        errorMessage: 'Обязательно'
      },
      {
        validator: (value) => {
          const phone = document.getElementById('tel2').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Введите телефон полностью'
      },
    ])
    .onSuccess(async function () {
      let data = {
        name2: document.getElementById("name2").value,
        tel2: document.getElementById("tel2").value
      }

      let responce = await fetch("php/contacts.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json: charset=UTF-8" 
        }
      })

      let result = await responce.text()

      alert(result)
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const validatorCategory = new JustValidate('#formСategory')

  Inputmask('+7 (999) 999-99-99').mask(document.getElementById('tel3'));

  validatorCategory
    .addField('#typesСategory', [
      {
        rule: 'required',
        errorMessage: "Обязательно",
      },
    ])
    .addField('#name3', [
      {
        rule: 'required',
        errorMessage: "Обязательно"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Напишите правильно имя"
      },
      {
        rule: 'maxLength',
        value: 25,
        errorMessage: "Напишите правильно имя"
      },
    ])
    .addField('#tel3', [
      {
        validator: (value) => {
          const phone = document.getElementById('tel3').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length > 0);
        },
        errorMessage: 'Обязательно'
      },
      {
        validator: (value) => {
          const phone = document.getElementById('tel3').inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Введите телефон полностью'
      },
    ])
    .onSuccess(async function () {
      let data = {
        typesСategory: document.getElementById("typesСategory").value,
        name3: document.getElementById("name3").value,
        tel3: document.getElementById("tel3").value
      }

      let responce = await fetch("php/furniture.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json: charset=UTF-8" 
        }
      })

      let result = await responce.text()

      alert(result)
    });

});

// -------- -- QUESTION ACCARDION -- -------- //    

const accordion_item = document.querySelectorAll(".accordion_item");
accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".activeA");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});
function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach((item) => (item.innerHTML = "+"));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("activeA");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("activeA");
    content.style.height = content.scrollHeight + 10 + "px";
  }
};

// // -------- -------- SWIPER -------- -------- //

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   }
// });

// // -------- -------- SELECT MENU -------- -------- //

// const optionMenu = document.querySelector(".select-menu"),
//   selectBtn = optionMenu.querySelector(".select-btn"),
//   options = optionMenu.querySelectorAll(".option"),
//   sBtn_text = optionMenu.querySelector(".sBtn-text");

// selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
// options.forEach(option => {
//   option.addEventListener("click", () => {
//     let selectedOption = option.querySelector(".option-text").innerText;
//     sBtn_text.innerText = selectedOption;

//     optionMenu.classList.remove("active");
//   })
// })



