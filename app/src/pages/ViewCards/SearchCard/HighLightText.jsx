export function HighLightText({ txt, target }) {
    const regex = new RegExp(target, "gi"); // Cria regex dinâmica (case insensitive)
    // Divide o texto em partes e destaca os matches
    const highlightedText = txt.split(regex).flatMap((part, index, array) => {
        if (index < array.length - 1) {
            return [
                part, // Texto normal
                <mark key={index}>{txt.match(regex)[index]}</mark>, // Correspondência destacada
            ]
        }
        return part // Última parte sem correspondência
    })

    return (
        <>{highlightedText}</>
    )
}