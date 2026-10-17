# MecTools Pro v1.9 — Surge e diagnóstico

Atualização sobre a v1.8: causas de surge, referências de coleta, checklist e comparação opcional de vazões corrigidas usando mapa OEM. Não altera proteções ou setpoints.

# MecTools Pro v1.4 — Pacote GitHub para APK Android

Este projeto contém o app web offline em `www/index.html`, calculadoras industriais e o módulo de alinhamento CENTAC com dois relógios. **Alinhamento ainda não validado para correções reais em campo.**

## Estrutura que deve aparecer na raiz do GitHub

```
.github/workflows/android-apk.yml
www/index.html
scripts/check-web.js
package.json
capacitor.config.json
README.md
.gitignore
```

**IMPORTANTE:** O GitHub não compila o ZIP enviado como arquivo único. Extraia o ZIP no computador e envie os arquivos **preservando as pastas** `.github`, `www` e `scripts`. Em Windows, pastas que começam com ponto podem estar ocultas; configure para exibir itens ocultos. A pasta `www` deve conter `index.html`, e não apenas um arquivo vazio. Não coloque uma pasta adicional envolvendo tudo na raiz do repositório.

## Substituir o projeto antigo

1. Faça backup do repositório antigo ou mantenha seu histórico. Não é necessário excluir o repositório.
2. Envie o conteúdo desta pasta para a raiz do repositório. Remova arquivos antigos conflitantes, em especial outros workflows `.yml` que possam falhar independentemente.
3. Confira a aba **Código** e a estrutura acima.
4. Abra **Ações** > **Compilar MecTools Pro APK** > **Run workflow** (na ramificação principal).
5. Aguarde a execução verde e baixe o artefato `MecTools-Pro-APK-debug`.
6. Extraia o artefato ZIP e instale `app-debug.apk` no Android.

O arquivo APK é **debug**, para testes, não uma versão release assinada para loja. A compilação depende de GitHub Actions, Android SDK e download de dependências.

## Problemas anteriores corrigidos

- Workflow contempla a ramificação `principal` além de `main` e `master`.
- Android SDK especifica explicitamente `platform-tools`, `platforms;android-35`, `build-tools;35.0.0` para não tentar instalar pacote inexistente `tools`.
- Validação prévia exige `www/index.html` e `scripts/check-web.js` antes do Capacitor.
- Comandos do Capacitor executados na raiz, cujo `webDir` é `www`.

## Segurança de engenharia

O módulo CENTAC usa leituras manuais e modelo geométrico demonstrativo. Verifique método de montagem, sinais, bracket sag, dilatação térmica, tolerâncias OEM e validação metrológica. Não use resultados não validados para mover máquinas industriais.


## Atualização v1.5 — 17/10/2026
- Conversão direta de mícrons (µm) ↔ mils (0,001 polegada).
- Novo diagnóstico de vazão de descarga: medidor, velocidade média medida, vazão mássica ou apenas diagnóstico sem medição.
- Dados de inlet/IGV, blow-off, corrente, tensão, fator de potência, pressões e temperaturas. Abertura de válvulas e corrente NÃO geram vazão por si só.
- Estimativa de densidade por gás ideal, vazão mássica e balanço da blow-off apenas quando as grandezas são conhecidas e compatíveis.
- Orientação dos pontos físicos de coleta e referências axiais A/B, F1/F2 para alinhamento CENTAC.
- Módulos anteriores preservados, incluindo surge demonstrativo.

### Envio ao GitHub
Extraia este ZIP e envie **o conteúdo interno** para a raiz do repositório, incluindo `.github/workflows/android-apk.yml` e `www/index.html`. O arquivo ZIP sozinho não aciona a compilação. O GitHub Actions gera um APK debug quando a compilação concluir com sucesso.

### Aviso técnico
As estimativas não substituem medições de vazão calibradas, dados do fabricante, procedimentos de segurança e validação do alinhamento.

## v1.6 — Polegadas
Correção da validação que rejeitava frações como 4/5. Conversões polegadas ↔ mm, mils → mm, µm, frações mistas e decimais, tabela 1/64. Testes: 4/5 in = 20,32 mm; 1/4 in = 6,35 mm; 1 1/2 in = 38,1 mm; 25,4 mm = 1 in.


## Atualização v1.7 — Parafusos métricos

Incluído módulo **Parafusos métricos M2–M48**: diâmetro nominal, passo grosso, seleção de passos finos usuais, conversão para polegadas, equivalente em TPI e broca de pré-furo aproximada (D − P). A tabela é uma referência, não substitui especificações ISO, desenho de fabricação nem definição de torque. Os módulos anteriores permanecem no aplicativo.


## Revisão técnica v1.8

- Corrigida a validação genérica que ocultava resultados do módulo de descarga.
- Campos vazios não são mais interpretados como zero nos cálculos.
- Curva fictícia de surge retirada: comparação só com valores OEM na mesma base.
- Mantidos dois relógios no alinhamento, com exigência de confirmação física das polaridades. Os calços são apenas projeções geométricas não validadas em campo.
- Conversões de polegadas, mils, µm, pressão, vibração, vazão em tubos, torque, RPM, dilatação, 4–20 mA, súbito, parafusos e roscas preservadas.
- A vazão de descarga depende de vazão medida ou velocidade média medida; posição de válvula e corrente não fornecem vazão real.

**Limitações:** Esta versão passou por revisão de código e testes matemáticos pontuais, não por homologação metrológica, teste de equipamento CENTAC, ou compilação Android em GitHub Actions. Antes de uso em manutenção crítica, validar contra o manual OEM e medições de referência.
