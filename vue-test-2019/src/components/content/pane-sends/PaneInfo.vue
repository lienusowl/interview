<template>
    <div>
        <ul class="panel-item-block-tabs" role="tablist">
            <li role="presentation">
                <a href="#about-result-pane-item-5" aria-controls="about-result-pane-item-5" role="tab" data-toggle="tab">Об объекте</a>
            </li>
            <li role="presentation" class="active">
                <a href="#xml-result-pane-item-5" aria-controls="xml-result-pane-item-5" role="tab" data-toggle="tab">XML-файл</a>
            </li>
            <li role="presentation">
                <a href="#archive-result-pane-item-5" aria-controls="archive-result-pane-item-5" role="tab" data-toggle="tab">Архив</a>
            </li>
        </ul>

        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade about-result-pane-item" id="about-result-pane-item-5">
                <div class="result-adress">
                    <p>
                        <span class="title">Кек-архив:</span>
                        <span class="message">req_c1фывфывфыв2800.zip</span>
                    </p>
                    <p>
                        <span class="title">Адрес:</span>
                        <span class="message">Мой адрес не дом и не улица, д 31, к 131</span>
                    </p>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade in active xml-result-pane-item" id="xml-result-pane-item-5">
                <p class="error-message">Штучка не соответствует схеме. Ошибка(и) :</p>
                <div class="messages-xml-result">
                    <p>1. Element 'Вова': Missing child element(s). Expected is ( Definition ). Строка: 61.</p>
                    <p>2. Element 'Вова': Missing child element(s). Expected is ( Definition ). Строка: 62.</p>
                    <p>3. Element 'Вова': Missing child element(s). Expected is ( Definition ). Строка: 63.</p>
                    <p>4. Element 'Вова': Missing child element(s). Expected is ( Definition ). Строка: 65</p>
                    <p>5. Element 'Вова': Missing child element(s). Expected is ( Definition ). Строка: 67.</p>
                    <p>6. Element 'Вова': Missing child element(s). Expected is ( Definition ). Строка: 68.</p>
                    <a href="#" class="btn btn-show-more">Показать еще</a>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade archive-result-pane-item" id="archive-result-pane-item-5">
                <p class="error-message">Опа ошибки:</p>
                <div class="messages-xml-result">
                    <p>В ZIP-архиве не найден файл: "Images\План 1 Чертеж.pdf". Ссылка на этот файл имеется  	в XML-файле в узле: "/ParcelsSubParcels/AppliedFile".</p>
                    <p>В ZIP-архиве не найден файл: "Images\План 1 Акт.pdf". Ссылка на этот файл имеется в 	   	XML-файле в узле: "/Document/AppliedFile".</p>
                    <p>В ZIP-архиве не найден файл: "Images\План 1 Абрисы.pdf". Ссылка на этот файл имеется в XML-файле в узле: "/Schemes/NodalPointScheme/AppliedFile".</p>
                    <a href="#" class="btn btn-show-more">Показать еще</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaneInfo"
    }
</script>

<style scoped>

</style>
