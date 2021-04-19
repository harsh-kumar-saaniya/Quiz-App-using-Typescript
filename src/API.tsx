export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log(data)
};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medim",
    HARD = "hard",
}



