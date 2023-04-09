<template>
  <Header/>
  <div class="container">
    <div class="center">
      <h2>Связаться с нами</h2>
      <p>Загляните на чашечку кофе или оставьте нам сообщение:</p>
    </div>
  <div class="row">
    <div class="column">
      <form>
        <label>Ваше имя</label>
        <input type="text" name="firstname" placeholder="Ваше имя">
        <label>Фамилия</label>
        <input type="text" name="lastname" placeholder="Фамилия">
        <label>Ваш город</label>
        <select>
          <option value="Vladivostok">Владивосток</option>
          <option value="Nakhodka">Находка</option>
        </select>
        <label>Subject</label>
        <textarea placeholder="Напишите что-нибудь..." style="height:170px"></textarea>
        <input type="submit" value="Отправить">
      </form>
    </div>
  </div>
</div>
</template>
  


<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Contacts_tab',
  components: {
      Header
    }
}
</script>


  
<style scoped>
* {
    box-sizing: border-box;
}

input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #141414;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 10px;
}

@media screen and (max-width: 600px) {
    .column, input[type=submit] {
        width: 100%;
        margin-top: 0;
    }
}
</style>