<nav id="topHeader" class="navbar navbar-expand-lg navbar-dark" >
    <a class="navbar-brand" href="https://www.ibadpu.com.br" target="_blank">
        <img src="<?= $head["logo"] ?>" alt="logo" height="40" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse pl-4" id="navbarSupportedContent" style="">
        <ul class="nav navbar-nav mr-auto">
            <li class="active">
                <a data-id="home" class="nav-link" href="<?= url("home") ?>" >Home<span class="sr-only">(current)</span></a>
            </li>
            <?php if(!empty($access) && (in_array("Documentação", $access) || in_array("*", $access))): ?>
                <li class="nav-item dropdown">
                    <a class="nav-item nav-link dropdown-toggle" id="nav-documentos-tab" data-toggle="dropdown" href="#" role="tab" aria-controls="nav-profile" aria-selected="false">Documentos</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" data-id="documentation/init">Exibir</a>
                        <a class="dropdown-item" href="#" data-id="documentation/add">Adcionar</a>
                    </div>
                </li>
            <?php endif ?>
            <?php if(!empty($access) && (in_array("Lista de Membros", $access) || in_array("*", $access))): ?>
            <li class="nav-item dropdown">
                <a class="nav-item nav-link dropdown-toggle" id="nav-membros-tab" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Membros</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="<?= url("membership/init") ?>" data-id="membership/init">Fichas</a>
                    <a class="dropdown-item" href="<?= url("occupation/init") ?>" data-id="occupation/init">Funções</a>
                </div>
            </li>
            <?php endif ?>
            <?php if(!empty($access) && (in_array("Movimentação Financeira", $access) || in_array("*", $access))): ?>
                <li class="nav-item dropdown">
                    <a class="nav-item nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Movimentação</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="<?= url("moviment/new") ?>" data-id="moviment/new">Novo</a>
                        <a class="dropdown-item" href="<?= url("moviment") ?>" data-id="moviment">Relatório</a>
                        <a class="dropdown-item" href="#" data-id="proof/init">Adcionar Comprovantes</a>
                    </div>
                </li>
            <?php endif ?>
        </ul>
        <div class="navbar navbar-right config">
            <ul class="nav navbar">
                <?php if(!empty($access) && (in_array("Login de Acesso", $access) || in_array("*", $access))): ?>
                    <li>
                        <a data-id="user" class="nav-link icon-login" href="<?= url("user") ?>" >
                            <i class="fa fa-id-card" title="Cadastro de Login"></i>
                        </a>
                    </li>
                <?php endif; ?>
                <?php if(!empty($access) && (in_array("Segurança", $access) || in_array("*", $access))): ?>
                    <li>
                        <a data-id="shield" class="nav-link icon-shield" href="<?= url("shield") ?>" >
                            <i class="fa fa-shield" title="Segurança" ></i>
                        </a>
                    </li>
                <?php endif ?>
                <?php if(!empty($access) && (in_array("Configuração", $access) || in_array("*", $access))): ?>
                    <li>
                        <a data-id="config" class="nav-link icon-config" href="<?= url("config") ?>">
                            <i class="fa fa-cog" title="Configuração" ></i>
                        </a>
                    </li>
                <?php endif ?>
                <li>
                    <a data-id="exit" class="nav-link icon-exit" href="<?= url("exit") ?>" >
                        <i class="fa fa-sign-out" title="Sair" ></i>
                    </a>
                </li>
            </ul>
        </div><!-- navbar rigth-->
    </div><!-- navbar-collapse -->
</nav>
<div class="identification"><i>Usuário:</i> <?= ($logged ?? "No user logged in") ?></div>
