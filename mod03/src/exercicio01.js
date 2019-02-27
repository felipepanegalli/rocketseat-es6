// Funão delay aciona o .then após 1s

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const umPorSegundo = async () => {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
};
