
const saturdayFun = (activity ='roller-skate') => `This Saturday, I want to ${activity}!`

saturdayFun("bathe my dog")

const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`

const wrapAdjective = (paramOut = "*") => {
    return function (paramIn = "special") {
        return (`You are ${paramOut}${paramIn}${paramOut}!`)
    }
}

wrapAdjective("||")("a dedicated programmer")