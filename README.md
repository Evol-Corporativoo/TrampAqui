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
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack react-native-bouncy-checkbox
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated@~2.14.4 expo-linear-gradient react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
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