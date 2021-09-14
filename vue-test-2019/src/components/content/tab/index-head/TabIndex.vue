<template>
    <ul class="CE-tabs-index" role="tablist">
        <li role="presentation">
            <a href="#file-load" aria-controls="file-load" role="tab" data-toggle="tab" aria-expanded="true">Заправки всякие</a>
        </li>
        <li role="presentation" class="active">
            <a href="#result" aria-controls="result" role="tab" data-toggle="tab" aria-expanded="false">Результаты</a>
        </li>
         <!--если пока ничего не отправили так будет, добавляется класс locked-tab -->
        <!--<li role="presentation" class="locked-tab">-->
            <!--<a>Результаты</a>-->
        <!--</li>-->
    </ul>
</template>

<script>
    export default {
        name: "TabIndex"
    }
</script>

<style scoped>

</style>
