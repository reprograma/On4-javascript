[1mdiff --git a/Entregas/template-exercicio/script/script.js b/Entregas/template-exercicio/script/script.js[m
[1mdeleted file mode 100644[m
[1mindex bada81b..0000000[m
[1m--- a/Entregas/template-exercicio/script/script.js[m
[1m+++ /dev/null[m
[36m@@ -1,31 +0,0 @@[m
[31m-let inputNome = document.getElementById("enderecoInputNome");[m
[31m-let inputCep = document.getElementById("enderecoInputCEP");[m
[31m-let inputRua = document.getElementById("enderecoInputRua");[m
[31m-let inputNumero = document.getElementById("enderecoInputNumero");[m
[31m-let inputComplemento = document.getElementById("enderecoInputComplemento");[m
[31m-let button = document.querySelector(".endereco__button");[m
[31m-[m
[31m-[m
[31m-button.addEventListener("click", function(event){[m
[31m-    event.preventDefault();[m
[31m-[m
[31m-    let nomeValor = inputNome.value[m
[31m-    let cepValor = inputCep.value[m
[31m-    let ruaValor = inputRua.value[m
[31m-    let numeroValor = inputNumero.value[m
[31m-    [m
[31m-    if (nomeValor == ""){[m
[31m-        mensagem.textContent = "Preencha o Nome"[m
[31m-    }else if (cepValor == ""){[m
[31m-        mensagem.textContent = "Preencha o  CEP"[m
[31m-    }else if (ruaValor  == ""){[m
[31m-        mensagem.textContent = "Preencha a Rua"[m
[31m-    }else if (numeroValor == ""){[m
[31m-        mensagem.textContent = "Preencha o  Número"[m
[31m-    }else {[m
[31m-        mensagem.textContent = "Endereço cadastrado"[m
[31m-        alert("Cadastro realizado com sucesso")}[m
[31m-          [m
[31m-           console.log(nomeValor, cepValor, ruaValor, numeroValor)[m
[31m-})[m
[31m-[m
[1mdiff --git a/Entregas/template-exercicio/script/script2.js b/Entregas/template-exercicio/script/script2.js[m
[1mdeleted file mode 100644[m
[1mindex 20e196c..0000000[m
[1m--- a/Entregas/template-exercicio/script/script2.js[m
[1m+++ /dev/null[m
[36m@@ -1,38 +0,0 @@[m
[31m-let inputNome = document.getElementById("enderecoInputNome");[m
[31m-let inputCep = document.getElementById("enderecoInputCEP");[m
[31m-let inputRua = document.getElementById("enderecoInputRua");[m
[31m-let inputNumero = document.getElementById("enderecoInputNumero");[m
[31m-let inputComplemento = document.getElementById("enderecoInputComplemento");[m
[31m-let button = document.querySelector(".endereco__button");[m
[31m-[m
[31m-[m
[31m-button.addEventListener("click", function(event){[m
[31m-    event.preventDefault();[m
[31m-[m
[31m-    let nomeValor = inputNome.value[m
[31m-    let cepValor = inputCep.value[m
[31m-    let ruaValor = inputRua.value[m
[31m-    let numeroValor = inputNumero.value[m
[31m-    [m
[31m-    if (nomeValor == ""){[m
[31m-        mensagem.textContent = "Preencha o Nome"[m
[31m-    }else if (cepValor == ""){[m
[31m-        mensagem.textContent = "Preencha o CEP"[m
[31m-    }else if (ruaValor  == ""){[m
[31m-        mensagem.textContent = "Preencha a Rua"[m
[31m-    }else if (numeroValor == ""){[m
[31m-        mensagem.textContent = "Preencha o Número"[m
[31m-    }else {document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"[m
[31m-   [m
[31m-        inputNome.value = ""[m
[31m-        inputCep.value = ""[m
[31m-        inputRua.value = ""[m
[31m-        inputNumero.value = ""[m
[31m-        inputComplemento.value = ""[m
[31m-        [m
[31m-        [m
[31m-    }[m
[31m-        [m
[31m-          [m
[31m-        [m
[31m-})[m
[1mdiff --git a/Entregas/template-exercicio/script/script3.js b/Entregas/template-exercicio/script/script3.js[m
[1mdeleted file mode 100644[m
[1mindex 8506099..0000000[m
[1m--- a/Entregas/template-exercicio/script/script3.js[m
[1m+++ /dev/null[m
[36m@@ -1,53 +0,0 @@[m
[31m-let inputNome = document.getElementById("enderecoInputNome");[m
[31m-let inputCep = document.getElementById("enderecoInputCEP");[m
[31m-let inputRua = document.getElementById("enderecoInputRua");[m
[31m-let inputNumero = document.getElementById("enderecoInputNumero");[m
[31m-let inputComplemento = document.getElementById("enderecoInputComplemento");[m
[31m-let button = document.querySelector(".endereco__button");[m
[31m-[m
[31m-[m
[31m-button.addEventListener("click", function(event){[m
[31m-    event.preventDefault();[m
[31m-[m
[31m-    let nomeValor = inputNome.value[m
[31m-    let cepValor = inputCep.value[m
[31m-    let ruaValor = inputRua.value[m
[31m-    let numeroValor = inputNumero.value[m
[31m-    [m
[31m-    if (nomeValor == ""){[m
[31m-        mensagem.textContent = "Preencha o Nome"[m
[31m-    }else if (cepValor == ""){[m
[31m-        mensagem.textContent = "Preencha o CEP"[m
[31m-    }else if (ruaValor  == ""){[m
[31m-        mensagem.textContent = "Preencha a Rua"[m
[31m-    }else if (numeroValor == ""){[m
[31m-        mensagem.textContent = "Preencha o Número"[m
[31m-    }else {document.querySelector(".endereco__subtitle").textContent = "Endereço cadastrado com sucesso!"[m
[31m-   [m
[31m-    const item = document.createElement("div");[m
[31m-[m
[31m-    const nome = document.createElement("p");[m
[31m-    nome.textContent = inputNome.value;[m
[31m-[m
[31m-    const endereco = document.createElement("p");[m
[31m-    endereco.textContent = `${inputRua.value}, ${inputNumero.value}, ${inputComplemento.value}, [m
[31m-    ${inputCep.value}`;[m
[31m-    [m
[31m-[m
[31m-    item.appendChild(nome);[m
[31m-    item.appendChild(endereco);[m
[31m-[m
[31m-    document.getElementById("lista").appendChild(item);[m
[31m-    [m
[31m-        inputNome.value = ""[m
[31m-        inputCep.value = ""[m
[31m-        inputRua.value = ""[m
[31m-        inputNumero.value = ""[m
[31m-        inputComplemento.value = ""[m
[31m-        [m
[31m-    }     [m
[31m-})[m
[31m-[m
[31m-[m
[31m-[m
[31m-[m
