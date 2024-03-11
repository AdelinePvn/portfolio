const colors = [
    "rgb(183, 134, 251)",
    "rgb(249, 76, 82)",
    "rgb(124, 242, 128)",
    "rgb(116, 175, 243)",
    "rgb(251, 164, 137)",
    "rgb(240, 113, 134)",
    "rgb(221, 255, 71)",
    "rgb(86, 255, 255)",
    "rgb(255, 201, 86)",
    "rgb(129, 117, 178)"
]

const colorsGradient = [
    "rgba(183, 134, 251, 0.95) 0%, rgba(192, 149, 255, 0.95) 100%",
    "rgba(234, 94, 98, 0.95) 0%, rgba(249, 76, 82, 0.95) 100%",
    "rgba(124, 242, 128, 0.8) 0%, rgba(56, 225, 100, 0.8) 100%",
    "rgba(116, 175, 243, 0.8) 0%, rgba(95, 139, 246, 0.8) 100%",
    "rgba(251, 164, 137, 0.95) 0%, rgba(255, 136, 86, 0.95) 100%",
    "rgb(240, 113, 134) 0%, rgb(218, 71, 96) 100%",
    "rgb(226, 255, 96) 0%, rgb(221, 255, 71) 100%",
    "rgb(86, 255, 255) 0%, rgb(43, 216, 216) 100%",
    "rgb(255, 201, 86) 0%, rgb(252, 187, 48) 100%",
    "rgb(129, 117, 178) 0%, rgb(129, 117, 178) 100%"
]

const getColorByIndex = (index) => {
    return colors[index % colors.length]
}

const getGradientByIndex = (index) => {
    return colorsGradient[index % colorsGradient.length]
}