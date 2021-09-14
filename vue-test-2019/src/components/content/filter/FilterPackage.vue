<template>
    <div>
        <div class="CE-filter">
            <a data-toggle="modal" data-target=".bs-example-modal-sm">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 2464.78 2450.35" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path class="fil0" d="M0.03 0l2464.75 0 0 133.26 -0.16 0 -860.76 860.75 0 851.91 -0.95 0 -604.43 604.43 -0.07 0 -35.17 0 -98.1 0 0 -1451.95 -865.15 -865.15 0.03 -0.03 0 -133.23zm1470.57 1789.77l0 -848.06 -1.45 -1.45 1.45 -1.45 0 -0.5 0.5 0 805.05 -805.06 -2080.71 0 803.52 803.52 -0.55 0.55 0 1324.63 472.19 -472.19z"/></g></svg>
            </a>
        </div>
        <FilterPackageModal></FilterPackageModal>
    </div>
</template>

<script>
    import FilterPackageModal from './../../static/modal/FilterPackageModal';

    export default {
        name: "FilterPackages",
        components: {
            FilterPackageModal
        }
    }
</script>

<style scoped>

</style>