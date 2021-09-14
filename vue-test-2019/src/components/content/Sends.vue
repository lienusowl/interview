<template>
    <div role="tabpanel" class="tab-pane fade" id="file-load">
        <form class="opened" autocomplete="off" action="" method="post" name="blank" onsubmit="return true;" enctype="multipart/form-data">


            <div class="title-block">
                <div class="round"></div>
                <div class="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 40px; height: 55px;left: 9px;position: relative;">
                    <title>Accessibility</title>
                    <circle fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="3" cx="256" cy="56" r="40"/>
                    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/>
                  </svg>
                </div>
                <div class="title-big">
                    <p>Выберите штучки</p>
                </div>
            </div>
            <!-- custom file upload field -->
            <div class="form-group upload-image loading-data">
                <div class="messages-container">

                    <!-- ход загрузки файлов -->
                    <div class="loading-progress">
                        <div class="col-md-4 loading-block">

                            <div class="move">
                                <svg class="file fadein" x="0px" y="0px" width="36px" height="43px" viewBox="0 0 36 43">
                                    <path class="file-body" d="M36,43H0V0h24.7L36,11.3V43z"/>
                                    <path class="file-bend" d="M24.7,0L36,11.3H24.7V0z"/>
                                </svg>
                                <svg class="file zoomin" x="0px" y="0px" width="36px" height="43px" viewBox="0 0 36 43">
                                    <path class="file-body" d="M36,43H0V0h24.7L36,11.3V43z"/>
                                    <path class="file-bend" d="M24.7,0L36,11.3H24.7V0z"/>
                                </svg>
                                <svg class="file zoomout" x="0px" y="0px" width="36px" height="43px" viewBox="0 0 36 43">
                                    <path class="file-body" d="M36,43H0V0h24.7L36,11.3V43z"/>
                                    <path class="file-bend" d="M24.7,0L36,11.3H24.7V0z"/>
                                    <path class="file-check done" d="M26.8,20.6L14.9,32.5l-5.7-5.7l2.1-2.1l3.6,3.6l9.8-9.9L26.8,20.6z"/>
                                    <circle class="file-loading load" cx="13" cy="21" r="7.7"></circle>
                                </svg>
                                <svg class="file fadeout" x="0px" y="0px" width="36px" height="43px" viewBox="0 0 36 43">
                                    <path class="file-body" d="M36,43H0V0h24.7L36,11.3V43z"/>
                                    <path class="file-bend" d="M24.7,0L36,11.3H24.7V0z"/>
                                    <path class="file-check" d="M26.8,20.6L14.9,32.5l-5.7-5.7l2.1-2.1l3.6,3.6l9.8-9.9L26.8,20.6z"/>
                                </svg>
                            </div>
                            <p>Загружено <span class="uploaded">3</span> из <span class="left">9</span> файлов</p>
                            <a href="#" class="btn">Отмена</a>
                        </div>
                        <div class="col-md-8 statuses">
                            <div class="scrollbar-inner">
                                <p>
                                    <span class="file-name">req_c13e186-98d0-4d24-9ab5-fc8cv5202800.zip</span>
                                    <span class="loading">Загружается...</span>
                                </p>
                                <p>
                                    <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded-before">Загружен ранее</span>
                                </p>
                                <p>
                                    <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded">Загружен успешно</span>
                                </p>
                                <p>
                                  <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded">Загружен успешно</span>
                                </p>
                                <p>
                                  <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded-before">Загружен ранее</span>
                                </p>
                                <p>
                                  <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded-before">Загружен ранее</span>
                                </p>
                                <p>
                                  <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded">Загружен успешно</span>
                                </p>
                                <p>
                                  <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded">Загружен успешно</span>
                                </p>
                                <p>
                                  <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded-before">Загружен ранее</span>
                                </p>
                                <p>
                                  <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded-before">Загружен ранее</span>
                                </p>
                                <p>
                                  <span class="file-name">фывфывcv5202800.zip</span>
                                    <span class="loaded">Загружен успешно</span>
                                </p>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- ход загрузки файлов -->

                    <!-- варианты отображения в поле -->
                    <div class="not-authorized">

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 90px;height: 100px;">
                        <title>Accessibility</title>
                        <circle fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="3" cx="256" cy="56" r="40"/>
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/>
                      </svg>
                      <p class="text">Вы не авторизованы. Пожалуйста, авторизуйтесь<br>
                            для загрузки файлов</p>
                        <a href="#" class="green">Авторизация</a>
                    </div>
                    <div class="authorized">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 90px;height: 100px;">
                        <title>Accessibility</title>
                        <circle fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="3" cx="256" cy="56" r="40"/>
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/>
                      </svg><p class="text">Перетащите штучку<br>
                            или выберите файлы вручную</p>
                        <a href="#" class="green">Выбрать файлы</a>
                    </div>
                    <div class="warning">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 90px;height: 100px;">
                        <title>Accessibility</title>
                        <circle fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="3" cx="256" cy="56" r="40"/>
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/>
                      </svg><p class="text">Ошибка!</p>
                        <div class="message-warn"></div>
                        <p class="specs-file-name"></p>
                    </div>
                    <div class="downloading">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 90px;height: 100px;">
                        <title>Accessibility</title>
                        <circle fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="3" cx="256" cy="56" r="40"/>
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/>
                      </svg><p class="text">Файл загружается</p>
                        <div class="message-warn"></div>
                        <p class="specs-file-name"></p>
                    </div>
                    <div class="iddle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 90px;height: 100px;">
                        <title>Accessibility</title>
                        <circle fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="3" cx="256" cy="56" r="40"/>
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/>
                      </svg><p class="text">Перетащите сюда штучку<br>или выберите файл в ручную</p>
                        <a class="green">Выбрать файл</a>
                    </div>
                    <div class="success">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 90px;height: 100px;">
                        <title>Accessibility</title>
                        <circle fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="3" cx="256" cy="56" r="40"/>
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/>
                      </svg><p class="text">Файл успешно добавлен!</p>
                        <p class="specs-file-name"></p>
                        <input type="button" value="Конвертировать" name="submit" id="submit" class="green convert">
                    </div>
                    <!--варианты отображения в поле-->


                </div>
                <input type="file" multiple="false" class="userfile upload-img-input-file" name="userfile1" id="userfile1" accept="text/xml,application/xml,application/zip" title="Выберите файл электронного XML-документа или архив" value="">
                <div class="progress-line">
                    <div class="progress-inner" id="convert-progress"></div>
                </div>
            </div>
            <!-- custom file upload field -->

            <!-- результаты отправок -->
            <div class="history-shipping result-send">
                <div class="tb-head">
                    <div class="col-md-9">
                        <p>Обозначение штучки</p>
                    </div>
                    <div class="col-md-2">
                        <p>Тип проекта</p>
                    </div>
                    <div class="col-md-1">
                        <div class="custom-checkbox">
                            <label>
                                <input autocomplete="off" type="checkbox" id="mainCheckbox" title="Выделить или снять всё">
                                <span></span>
                            </label>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="clear"></div>
            <div class="panel-group result-send-panel-items" id="pane-result-send-items" role="tablist" aria-multiselectable="true">
                <PanelItemBlock></PanelItemBlock>
                <PanelItemWarning></PanelItemWarning>
                <PanelItemGood></PanelItemGood>
                <PanelItemLoading></PanelItemLoading>
                <PanelItemError></PanelItemError>
            </div>
            <!-- результаты отправок -->

            <!-- финал -->
            <div class="title-block checked-files">
                <div class="round"></div>
                <div class="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 40px; height: 55px;left: 9px;position: relative;">
                    <title>Accessibility</title>
                    <circle fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="3" cx="256" cy="56" r="40"/>
                    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"/>
                  </svg>
                </div>
                <div class="title-big">
                    <p>Проверено штучек: <span>999</span>, из них готово к отправке: <span>999</span></p>
                    <a href="#" class="btn btn-green">Отправить <span>999</span></a>
                </div>
            </div>
            <!-- финал -->
        </form>
    </div>
</template>

<script>
    import PanelItemBlock from './pane-sends/PanelItemBlocked';
    import PanelItemWarning from './pane-sends/PaneItemWarning';
    import PanelItemGood from './pane-sends/PaneItemGood';
    import PanelItemLoading from './pane-sends/PaneItemLoading';
    import PanelItemError from './pane-sends/PaneItemError';

    export default {
        name: "Sends",
        components: {
            PanelItemBlock,
            PanelItemWarning,
            PanelItemGood,
            PanelItemLoading,
            PanelItemError
        }

    }

</script>

<style scoped>

</style>
