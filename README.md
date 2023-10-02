# Como baixar o projeto e atualizar algo?

1. Instalar a branch principal
 ```sh
    git pull https://github.com/Evol-Corporativoo/TrampAqui main
```
---
2. Baixar o gerenciador de pacotes do projeto
 ```sh
    yarn install
 ```
---
3. Baixar as bibliotecas necessárias para o projeto
```sh
yarn add @react-navigation/native
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/stack
yarn add react-native-bouncy-checkbox
yarn add @react-native-async-storage/async-storage
yarn add react-native-screens 
yarn add react-native-safe-area-context
yarn add react-native-gesture-handler 
yarn add react-native-reanimated@~2.14.4
yarn add expo-linear-gradient 
yarn add react-native-web@~0.18.10
yarn add react-dom@18.2.0 @expo/webpack-config@^18.0.1
```
---

4. Faça as mudanças e adições que forem necessárias.

    Ex:
    - Adicionar tela nova, novo componente.
    - Mudança no design.
    - Implementação de script.

---

5. Adicione as mudanças na branch e mande para o github

  ```sh
    git add *    
    git commit -m "Explique o que você mexeu"
    git branch -m main
    git push -u https://github.com/Evol-Corporativoo/TrampAqui main
  ```
