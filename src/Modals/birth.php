<style>
    #birth .photos {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }

    #birth .photos .card {
        padding: 5px;
    }

    #birth .photos img{
        border-radius: 50%;
        /* margin: 10px; */
        align-self: center;
    }

    #birth .photos .name {
        text-align: center;
        font-size: .8em;
        font-weight: bolder;
        text-transform: uppercase;
    }

    #birth h4 {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }
</style>
<div id="birth">
    <span class="photos">
    <?php if (!empty($birthmonths)):
        foreach($birthmonths as $birthmonth): ?>
        <div class="card">
            <img src="image/id/<?= $birthmonth->photo_id ?>" alt="<?= $birthmonth->name ?>"
                height=auto width="100px" title="<?= explode("-",$birthmonth->birth_date)[2] ?>"/>
        <div class="name"><?= $birthmonth->name ?></div>
    </div>
    <?php endforeach; ?>
    <?php else: ?>
        <h4>Nenhum aniversariante neste mês</h4>
    <?php endif ?>
    </span>
</div>
