<script>
    import { _ } from "svelte-i18n";
</script>

<div class="home">
    <div>
        <h1>Curriculum Vitae</h1>
        <h2>{$_("tomas_mlynsky")}</h2>  
    </div>
</div>

<style>
    .home {
        display: flex;
        place-items: center;
        height: 100%;
    }
    h1 {
        font-size: 96px;
        text-align: left;
    }

    @media only screen and (max-width: 1240px) {
        h1 {
            font-size: 54px;
            padding-left: 30px;
            line-height: 54px;
        }    
        h2 {
            font-size: 42px;
            padding-left: 30px;
            line-height: 52px;
            box-sizing: border-box;
        }  
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 13vw;
            text-align: left;
            padding-left: 4vw;
            line-height: 12vw;
            box-sizing: border-box;
        }    
        h2 {
            font-size: 8vw;
            text-align: left;
            padding-top: 7vw;
            padding-left: 4vw;
            box-sizing: border-box;
        }  
    }
</style>
