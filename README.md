# YouTube Trusted Session Generator

> [!IMPORTANT]  
> ***This code MUST be installed on the SAME server that hosts the [Tube Video Backend](https://github.com/PureDevLabs/TubeVideoBackend) software!***

### Install bun on your Debian 12 / Ubuntu 22.04 Linux Server

Open Terminal

```bash
curl -fsSL https://bun.sh/install | bash
```

make bun Global executable

```bash
sudo mv ~/.bun/bin/bun /usr/local/bin/
```

```bash
sudo chmod a+x /usr/local/bin/bun
```

> [!IMPORTANT]  
> ***Close the Terminal after bun installation***


### Install Chromium Browser

#### Debian 12
```bash
sudo apt install chromium
```

#### Ubuntu 22.04
```bash
sudo apt install chromium-browser
```

On Ubuntu, open index.js and change in Line 26 `executablePath: "/usr/bin/chromium",` to `executablePath: "/usr/bin/chromium-browser",`

---

Download the Release zip file, upload it to the `/home` directory on your server, and extract it.


To install dependencies:

```bash
bun install
```

To run:

```bash
bun run start
```

This project was created using `bun init` in bun v1.1.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
