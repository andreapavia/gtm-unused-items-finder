export const gtmUnusedItemsFinder = (json) => {
    let gtmJsonExport

    if (typeof json === 'string') {
        gtmJsonExport = JSON.parse(json)
    } else {
        gtmJsonExport = json
    }

    console.log("successfully imported json")
    console.log(gtmJsonExport)
}
