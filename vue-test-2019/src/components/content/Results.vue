<template>
    <div role="tabpanel" class="tab-pane fade in active" id="result">

        <div class="CE-search-results">
            <h2 class="">Отправленные штучки</h2>
            <div class="CE-search">
                <input type="text" placeholder="Введите текст...">
                <svg class="loup" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 66.68 66.68" enable-background="new 0 0 66.68 66.68" xml:space="preserve"><path data-v-682af77a="" fill="#b2b2b2" fill-opacity="0.996078" stroke-width="1.33364" stroke-linejoin="round" d="M 24.7495,-2.28882e-005C 31.5281,-2.28882e-005 37.676,2.68382 42.09,7.10427C 46.6615,11.5247 49.3414,17.6818 49.3414,24.4703C 49.3414,29.5223 47.765,34.2585 44.9275,38.2053L 65.5784,59.5182C 66.3666,60.3076 66.8395,61.4127 66.6818,62.5178C 66.6818,63.6229 66.2089,64.728 65.4207,65.6753L 65.4207,65.6753C 64.4749,66.4646 63.3714,66.9383 62.2679,66.7804L 62.2679,66.7804C 61.1644,66.7804 60.061,66.4646 59.1151,65.5174L 38.7795,44.5202C 34.6809,47.2041 29.9517,48.7828 24.7495,48.7828C 17.8134,48.7828 11.6654,46.099 7.25145,41.6785C 2.83753,37.2581 -1.08992e-007,31.101 -1.08992e-007,24.4703C -1.08992e-007,17.6818 2.83753,11.5247 7.25145,7.10427C 11.6654,2.68382 17.8134,-2.28882e-005 24.7495,-2.28882e-005 Z M 42.8782,40.8892C 42.5629,41.047 42.4052,41.3628 42.09,41.6785C 41.7747,41.8364 41.617,42.1521 41.3018,42.4679L 61.6374,63.3072C 61.795,63.465 62.1103,63.6229 62.2679,63.6229L 62.2679,63.6229C 62.5832,63.6229 62.8985,63.465 63.0561,63.3072L 63.0561,63.3072C 63.3714,63.1493 63.3714,62.8335 63.3714,62.5178C 63.3714,62.2021 63.3714,62.0442 63.2138,61.7284L 42.8782,40.8892 Z M 39.883,9.3145C 36.0996,5.52554 30.5822,3.15744 24.7495,3.15744C 18.7592,3.15744 13.2418,5.52554 9.45842,9.3145C 5.51741,13.2613 3.15281,18.4711 3.15281,24.4703C 3.15281,30.3116 5.51741,35.5215 9.45842,39.4683C 13.2418,43.2573 18.7592,45.6254 24.7495,45.6254C 30.5822,45.6254 36.0996,43.2573 39.883,39.4683C 43.824,35.5215 46.3462,30.3116 46.3462,24.4703C 46.3462,18.4711 43.824,13.2613 39.883,9.3145 Z "></path></svg>
            </div>
            <FilterPackage></FilterPackage>
            <div class="clear"></div>
        </div>

        <div class="history-shipping">
            <div class="tb-head">
                <div class="col-md-1">
                    <p>Статус</p>
                </div>
                <div class="col-md-5">
                    <p>Тип проекта</p>
                </div>
                <div class="col-md-2">
                    <p>Отправлено</p>
                </div>
                <div class="col-md-2">
                    <p>Осталось</p>
                </div>
                <div class="col-md-2">
                    <p>Действует до</p>
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <div class="clear"></div>

        <div class="" role="tablist" aria-multiselectable="true">
            <SentPackage></SentPackage>
            <SentPackage></SentPackage>
        </div>


        <CopyTextModal></CopyTextModal>
    </div>
</template>

<script>
    import FilterPackage from './filter/FilterPackage';
    import SentPackage from './pane-result/SentPackage';
    import CopyTextModal from "../static/modal/CopyTextModal";

    export default {
        name: "Results",
        components: {
            FilterPackage,
            SentPackage,
            CopyTextModal
        }

    }
</script>

<style scoped>

</style>
