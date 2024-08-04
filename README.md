# YouTube trusted session Generator

### Install bun on your Linux Server

Open Terminal

```bash
sudo curl -fsSL https://bun.sh/install | bash
```

make bun Global executable

```bash
sudo mv ~/.bun/bin/bun /usr/local/bin/
```

```bash
sudo chmod a+x /usr/local/bin/bun
```

> [!IMPORTANT]  
> ***close the Terminal after bun installation***


### Install Chromium Browser
```bash
sudo apt install chromium-browser
```

---

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run start
```

This project was created using `bun init` in bun v1.1.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
