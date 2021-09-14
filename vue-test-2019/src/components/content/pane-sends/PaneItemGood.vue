<template>
    <div class="panel-item-block">
        <div class="panel-item-heading" role="tab" id="pane-item-result-3">
            <div class="custom-checkbox checkbox-for-item">
                <label>
                    <input autocomplete="off" type="checkbox" id="mainCheckbox" title="Выделить или снять всё">
                    <span></span>
                </label>
            </div>
            <div class="panel-item-inner" role="button" data-toggle="collapse" data-parent="#pane-items" href="#pane-item-result-collapse-3" aria-expanded="true" aria-controls="pane-item-result-collapse-3">
                <div class="col-xs-2 col-md-1">
                    <div class="notification-tooltip" tooltip="У нет деняк, плоти деньги" flow="down">
                        <svg class="svg good" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 50.00 50.00" enable-background="new 0 0 50.00 50.00" xml:space="preserve">
                            <path fill-opacity="1" stroke-linejoin="round" d="M 0.364202,19.861C -0.0890928,19.407 -0.0890928,18.7261 0.364202,18.2721C 0.817497,17.8181 1.49744,17.8181 1.95073,18.2721L 16.2295,32.799L 48.3001,0C 48.7534,-0.453964 49.4334,-0.453964 49.8867,0C 50.34,0.453964 50.34,1.13491 50,1.58888L 17.0228,35.1823L 17.0228,35.1823C 16.5695,35.6362 15.7762,35.6362 15.4363,35.1823L 0.364202,19.861 Z "></path>
                        </svg>
                    </div>
                </div>
                <div class="col-xs-4 col-md-8">
                    <div class="adr">
                        <p><b>43:40:000657:ЗУ1</b>, Мой адрес не дом и не улица, д 31, к 131</p>
                    </div>
                </div>
                <div class="col-xs-4 col-md-2">
                    <p>Медведоплан строительства</p>
                </div>
                <div class="col-md-1">

                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div id="pane-item-result-collapse-3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="pane-item-result-3">
            <div class="panel-body">
                <div class="scrollbar-inner">
                    <a href="#" class="download-result-link">
                        <svg class="svg download" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 50.00 50.00" enable-background="new 0 0 50.00 50.00" xml:space="preserve">
                    <g>
                        <path fill="#141515" fill-opacity="1" stroke-linejoin="round" d="M 23.8771,11.9562C 23.8771,11.3643 24.3499,10.8908 25.0591,10.8908C 25.6501,10.8908 26.1229,11.3643 26.1229,11.9562L 26.1229,35.5134L 34.6336,27.4637C 34.9882,26.9902 35.6974,26.9902 36.1702,27.4637C 36.643,27.8188 36.643,28.5291 36.1702,29.0026L 25.8865,38.9464L 25.8865,38.9464C 25.4137,39.3015 24.7045,39.3015 24.2317,38.9464L 13.8298,28.8842C 13.4752,28.5291 13.4752,27.8188 13.8298,27.3453C 14.3026,26.9902 15.0118,26.9902 15.4846,27.3453L 23.8771,35.5134L 23.8771,11.9562 Z "/>
                        <path fill="#141515" fill-opacity="1" stroke-linejoin="round" d="M 25.0591,0C 31.9149,0 38.1797,2.84108 42.6714,7.33944L 42.6714,7.33944C 47.2813,11.8378 50,18.1118 50,25.0961C 50,31.9621 47.2813,38.2361 42.6714,42.7345L 42.6714,42.7345C 38.1797,47.3512 31.9149,50.0739 25.0591,50.0739C 18.0851,50.0739 11.8203,47.3512 7.32861,42.7345L 7.32861,42.7345C 2.83688,38.2361 -1.33977e-007,31.9621 -1.33977e-007,25.0961C -1.33977e-007,18.1118 2.83688,11.8378 7.32861,7.33944L 7.32861,7.33944C 11.8203,2.84108 18.0851,0 25.0591,0 Z M 41.1348,8.99673C 36.9976,4.8535 31.3239,2.24918 25.0591,2.24918C 18.7943,2.24918 13.0024,4.8535 8.98345,8.99673L 8.98345,8.99673C 4.84634,13.0216 2.24586,18.8221 2.24586,25.0961C 2.24586,31.3702 4.84634,37.0523 8.98345,41.1956L 8.98345,41.1956C 13.0024,45.3388 18.7943,47.8247 25.0591,47.8247C 31.3239,47.8247 36.9976,45.3388 41.1348,41.1956L 41.1348,41.1956C 45.2719,37.0523 47.7541,31.3702 47.7541,25.0961C 47.7541,18.8221 45.2719,13.0216 41.1348,8.99673 Z "/>
                    </g>
                </svg>
                    </a>

                    <PaneInfo></PaneInfo>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import PaneInfo from './PaneInfo';

    export default {
        name: "PanelItemGood",
        components: {
            PaneInfo
        }
    }
</script>

<style scoped>

</style>
