
### test
```java
    jksdnklfskdm
    public static void main(){}
```
### sfklsklfmklsd
```js
    methods: {
        highlightCodeBlocks(md) {
        // 将markdown解析为html
        const html = marked(md)
        // 匹配代码块部分并进行高亮
        const regex = /<pre><code class="(.+?)">([\s\S]+?)<\/code><\/pre>/gm
        const highlightedHtml = html.replace(regex, (match, p1, p2) => {
            return `<pre><code class="${p1}">${hljs.highlightAuto(p2).value}</code></pre>`
        })
        return highlightedHtml
        }
    }
```
# fnsak
```js
    // 定制代码块的渲染方式
    renderer.code = (code, language) => {
    const highlightedCode = hljs.highlight(code, {language}).value
    return `<pre><code class="hljs ${language}">${highlightedCode}</code></pre>`
    }

    axios.get('path/to/markdown/file.md')
    .then(response => {
        const markdown = response.data
        const html = marked(markdown, {renderer})
        document.querySelector('#markdown-container').innerHTML = html
    })
```