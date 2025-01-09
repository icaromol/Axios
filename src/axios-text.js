// Selecionando os botões
const postBtn1 = document.getElementById("whk-make-1");
const postBtn2 = document.getElementById("whk-make-2");
const postBtn3 = document.getElementById("whk-make-3");
const postBtn4 = document.getElementById("whk-make-4");
const postBtn5 = document.getElementById("whk-make-5");

// Função para fazer uma requisição POST
const sendData1 = async () => {
  try {
    const response = await axios.post(
      "https://hook.us2.make.com/xdgivdeq63pc61fsaah254hhu7yt3okk",
      {
        email: "eve.holt@reqres.in",
        password: "BOTÃO 1",
      }
    );
    console.log("Resposta POST:", response.data);
  } catch (error) {
    console.error("Erro na requisição POST:", error);
  }
};

// Função para fazer uma requisição POST
const sendData2 = async () => {
  try {
    const response = await axios.post(
      "https://hook.us2.make.com/xdgivdeq63pc61fsaah254hhu7yt3okk",
      {
        email: "eve.holt@reqres.in",
        password: "BOTÃO 2",
      }
    );
    console.log("Resposta POST:", response.data);
  } catch (error) {
    console.error("Erro na requisição POST:", error);
  }
};

// Função para fazer uma requisição POST
const sendData3 = async () => {
  try {
    const response = await axios.post(
      "https://hook.us2.make.com/xdgivdeq63pc61fsaah254hhu7yt3okk",
      {
        email: "eve.holt@reqres.in",
        password: "Botão 3",
      }
    );
    console.log("Resposta POST:", response.data);
  } catch (error) {
    console.error("Erro na requisição POST:", error);
  }
};

// Função para fazer uma requisição POST
const sendData4 = async () => {
  try {
    const response = await axios.post(
      "https://hook.us2.make.com/xdgivdeq63pc61fsaah254hhu7yt3okk",
      {
        email: "eve.holt@reqres.in",
        password: "Botão 4",
      }
    );
    console.log("Resposta POST:", response.data);
  } catch (error) {
    console.error("Erro na requisição POST:", error);
  }
};

// Função para fazer uma requisição POST
const sendData5 = async () => {
  try {
    const response = await axios.post(
      "https://hook.us2.make.com/xdgivdeq63pc61fsaah254hhu7yt3okk",
      {
        email: "eve.holt@reqres.in",
        password: "Botão 5",
      }
    );
    console.log("Resposta POST:", response.data);
  } catch (error) {
    console.error("Erro na requisição POST:", error);
  }
};

// Adicionando eventos aos botões
postBtn1.addEventListener("click", sendData1);
postBtn2.addEventListener("click", sendData2);
postBtn3.addEventListener("click", sendData3);
postBtn4.addEventListener("click", sendData4);
postBtn5.addEventListener("click", sendData5);
