## Página de captura oculta — /consulta

Landing page standalone, acessível apenas por link direto (anúncios, campanhas). Sem nenhum link na home, header, footer ou menu mobile. Não indexável pelo Google.

### Estrutura da página (mobile-first, mesma identidade visual: verde escuro + dourado, Playfair + Inter)

1. **Hero compacto**
   - Logo da Dra. Jéssica no topo (sem menu de navegação)
   - Headline forte: "Foi lesado pelo banco, plano de saúde ou loja? Você pode ter direito a indenização."
   - Sub-headline curta reforçando análise gratuita/sem compromisso
   - Foto da Dra. Jéssica ao lado (desktop) / abaixo (mobile)

2. **Bullets de problemas resolvidos** (Direito do Consumidor)
   - Cobranças indevidas em bancos e cartões
   - Negativa abusiva de plano de saúde
   - Produto com defeito / serviço não entregue
   - Nome sujo indevidamente / golpes online

3. **Formulário de captura** (cartão destacado em dourado)
   - Campo: Nome completo
   - Campo: WhatsApp (com máscara)
   - Campo opcional: Conte seu caso em poucas palavras (textarea)
   - Botão grande dourado: "Quero falar com a Dra. Jéssica"
   - Ao enviar → valida com zod → abre WhatsApp (`wa.me/5521991848197`) com mensagem pré-preenchida contendo nome + caso

4. **Bloco de autoridade** (curto)
   - Foto + mini-bio (OAB, especialização)
   - 2-3 depoimentos curtos (placeholder)

5. **Rodapé minimalista**
   - Só nome + OAB + telefone. Sem links de navegação.

### Garantias de "página oculta"

- Rota `/consulta` registrada em `src/App.tsx` (antes do catch-all `*`)
- **Nenhum link** adicionado em `Header.tsx`, `Footer.tsx` ou menus
- `<meta name="robots" content="noindex, nofollow" />` na página via tag direta no `<head>` (usando `useEffect` para injetar, já que o projeto não tem react-helmet-async instalado — abordagem leve, sem nova dependência)
- Atualizar `public/robots.txt` adicionando `Disallow: /consulta` no bloco `User-agent: *`

### Detalhes técnicos

**Arquivos novos:**
- `src/pages/Consulta.tsx` — página completa, importa `logo`, usa `GoldButton`, framer-motion, validação com `zod` (já disponível no projeto via shadcn/form)

**Arquivos editados:**
- `src/App.tsx` — adicionar `<Route path="/consulta" element={<Consulta />} />` antes da rota catch-all
- `public/robots.txt` — adicionar `Disallow: /consulta` (se o arquivo não existir, criar com `User-agent: *` / `Allow: /` / `Disallow: /consulta`)

**Validação do formulário (zod):**
```
nome: string, trim, min 2, max 100
whatsapp: string, regex de 10-11 dígitos numéricos
mensagem: string opcional, max 500
```

**Envio:**
- Monta `https://wa.me/5521991848197?text=` + `encodeURIComponent("Olá Dra. Jéssica! Meu nome é {nome}. {mensagem}")`
- Abre em nova aba

### Fora do escopo

- Não salva leads em banco de dados (seria necessário ativar Lovable Cloud — posso adicionar depois se quiser histórico de leads)
- Não envia e-mail automático
- Não cria variações A/B da página
