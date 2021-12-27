<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title><?= CONF_SITE_TITLE ?></title>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="<?= theme("assets/img/logo.png") ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="<?= theme("assets/style.css") ?>" rel="stylesheet"/>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
	<style>

	</style>
</head>
<body class="body-login">
	<section class="login-block">
		<div class="container container-login">
			<div class="row">
				<header>
					<div class="logo"></div>
					<div id="alert"></div>
				</header>
				<div class="col-md-4 login-sec">
					<h2 class="text-center"><img src="<?= theme("assets/img/logo.png") ?>" alt="IBAD" height='70px' />IBAD</h2>
					<form action="#" class="login-form form-signin" method="post">
						<div class="form-group">
							<label for="exampleInputEmail1" class="text-uppercase">Usuário</label>
							<input name="login" type="text" class="form-control" placeholder="" autofocus required value="<?= ($_COOKIE["login"] ?? null) ?>"/>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1" class="text-uppercase">Senha</label>
							<input name="password" type="password" class="form-control" placeholder="" />
						</div>
						<div class="form-group">
							<label for="connection-name" class="text-uppercase">Servidor</label>
							<select id="connection-name" class="form-control" name="connection-name" placeholder="Conexão" required>
								<option value=""></option>
								<?php foreach($connectionList as $local):
											$selected = ($local === $connectionName ? "selected" : null)?>
									<option value="<?= $local ?>" <?= $selected ?>><?= $local ?></option>
								<?php endforeach; ?>
							</select>
						</div>
						<div class="form-check">
							<label class="form-check-label">
							<input name="remember" type="checkbox" class="form-check-input" value=true <?= (!empty($_COOKIE["remember"]) ? "checked" : null) ?>/>
							&nbsp Lembre-me
						</label>
						</div><br />
						<button class="submit signin_btn fg-btn red large inline fg-fw bold" type='submit' value="Entre">Enter</button>
						<input type="hidden" name="submitted" id="submitted" value="true" />
					</form>
				</div>
				<div class="col-md-8 banner-sec">
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						</ol>
						<div class="carousel-inner" role="listbox">
							<div class="carousel-item active">
								<img class="d-block img-fluid" src="<?= theme("assets/img/ceu_pomba.jpg") ?>" alt="First slide" >
							</div>
							<div class="carousel-item">
								<img class="d-block img-fluid" src="<?= theme("assets/img/microfone.jpg") ?>" alt="Second slide">
							</div>
							<div class="carousel-item">
								<img class="d-block img-fluid" src="<?= theme("assets/img/noite.jpg") ?>" alt="Third slide">
							</div>
						</div>
					</div>
				</div>
			</div><!-- row -->
			<div id="boxe_main"></div>
			<div id="mask_main"></div>
			<script type="text/javascript" src="<?= theme("assets/scripts.js") ?>" ></script>
		</div><!-- container -->
	</section>
</body>
