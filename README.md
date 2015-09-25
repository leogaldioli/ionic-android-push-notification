# Exemplo de notificação push em android utilizando ionic e nodejs
Deve-se seguir este tutorial para se cadastrar no [**Google Cloud Messaging for Android**](https://developers.google.com/cloud-messaging/), gerar a *API KEY* e o *Project Number*.

## Instalação

```bash
$ cd app
$ ionic platforms add android
```

```bash
$ cd push-server
$ npm install
```

## Alterações necessárias

### Arquivo /app/www/js/app.js
```
Trocar a o campo PROJECT_NUMBER para o número do projeto criado no Google Cloud Messaging
```
### Arquivo /push-server/routes/push.js

```
Trocar o campo API_KEY pela chave de servidor criada no Google Cloud Messaging
```

# Rota para envio da notificaçao

* **URL**

  /push

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `id=[id obtido no app]`

* **Exemplo:**

  ```javascript
    $.ajax({
      url: "/push",
      dataType: "json",
      type : "POST",
      DATA : "{id : ID_DEVICE}",
      success : function(r) {
        console.log(r);
      }
    });
  ```
