# MecTools Pro v1.3 — projeto pronto para enviar ao GitHub

## Conteúdo
- `www/index.html`: aplicativo offline, incluindo **Alinhamento CENTAC — dois relógios reversos** e calculadoras de manutenção.
- `.github/workflows/android-apk.yml`: automação GitHub Actions para gerar um **APK debug**.
- `capacitor.config.json`, `package.json`: configuração Capacitor Android.
- `scripts/check-web.js`: validação sintática do JavaScript antes da compilação.

## Publicar no GitHub pelo navegador
1. **Extraia o ZIP no celular ou computador.** Não envie apenas o arquivo ZIP para o repositório.
2. Crie um repositório em https://github.com/new, com branch `main`.
3. No repositório, escolha **Add file → Upload files** e envie os arquivos e as pastas extraídos, mantendo a estrutura. A pasta **`.github/workflows/`** precisa estar no repositório.
4. Se o gerenciador de arquivos não mostrar a pasta oculta `.github`, crie o arquivo pelo GitHub em **Add file → Create new file** com o nome exato `.github/workflows/android-apk.yml` e cole o conteúdo do arquivo do ZIP.
5. Abra **Actions → Compilar MecTools Pro APK → Run workflow**. O workflow também é executado automaticamente a cada push em `main` ou `master`.
6. Quando aparecer a execução concluída, abra-a e baixe **MecTools-Pro-APK-debug** em **Artifacts**.
7. Extraia o artefato baixado para obter `app-debug.apk` e instale no Android.

## Atenção
- Este pacote **não é um APK pronto**; a compilação acontece no GitHub, e depende da disponibilidade das dependências Android/Node.
- APK **debug** é para teste, não para publicação comercial na Play Store. Para distribuir, será necessário gerar um APK/AAB de release assinado.
- O módulo de alinhamento é um **protótipo didático** ainda sem validação de fórmulas e polaridades com dados reais/OEM. Não use os resultados para corrigir pés de máquinas reais sem validação técnica.
- A curva de surge também é apenas ilustrativa.
- Esta versão ZIP não sincroniza automaticamente com o projeto Lovable.
