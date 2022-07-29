export default ({ $axios }, inject) => {
    $axios.onResponse((res) => {
        console.log(12132132);
        return res.data;
    });
    inject("axios", $axios);
};