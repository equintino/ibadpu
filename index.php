<?php
    // error_reporting(E_ALL);
    // ini_set('display_errors', 1);

    ob_start();

    require __DIR__ . "/vendor/autoload.php";

    use CoffeeCode\Router\Router;
    use Core\Session;
    use _App\Web;

    $session = new Session();
    $router = new Router(url(), ":");

    if(!empty($_SESSION["login"])) {
        /**  Web Routes */
        $router->namespace("_App");
        $router->get("/home", "Web:home");
        $router->get("/", "Web:init");


        /**  The Users' Screens */
        $router->namespace("_App");
        $router->get("/user", "User:init");
        $router->get("/user/{user}", "User:edit");
        $router->post("/user/update", "User:update");
        $router->post("/user/delete/{user}", "User:delete");
        $router->post("/user/password/reset", "User:reset");
        $router->get("/user/register", "User:add");
        $router->post("/user/save", "User:save");
        $router->get("/user/list", "User:list");


        /** The Groups' Screens */
        $router->namespace("_App");
        $router->get("/shield", "Group:list");
        $router->get("/group/register", "Group:add");
        $router->post("/group/save", "Group:save");
        $router->post("/group/delete/{name}", "Group:delete");
        $router->post("/group/update", "Group:update");
        $router->post("/group/load/{name}", "Group:load");


        /** The Config's Screens */
        $router->namespace("_App");
        $router->get("/config", "Config:list");
        $router->get("/config/register", "Config:add");
        $router->get("/config/edit/{connectionName}", "Config:edit");
        $router->post("/config/update", "Config:update");
        $router->post("/config/delete/{connectionName}", "Config:delete");
        $router->post("/config/save", "Config:save");


        /** Membership Screens */
        $router->namespace("_App");
        $router->get("/membership/init", "Membership:init");
        $router->post("/membership/list", "Membership:list");
        $router->get("/membership/register/{id}", "Membership:register");
        $router->post("/membership/update", "Membership:update");
        $router->post("/membership/save", "Membership:save");
        $router->get("/membership/no_member", "Membership:noMember");
        $router->get("/membership/birthday", "Membership:birthday");
        $router->post("/membership/birthmonth", "Membership:birthmonth");


        /** Occupation Screens */
        $router->namespace("_App");
        $router->get("/occupation/init", "Occupation:init");
        $router->get("/occupation/list", "Occupation:list");
        $router->get("/occupation/register", "Occupation:register");
        $router->post("/occupation/edit", "Occupation:edit");
        $router->post("/occupation/save", "Occupation:save");
        $router->post("/occupation/delete/id/{id}", "Occupation:delete");


        /** Financial Movement Screens */
        $router->namespace("_App");
        $router->get("/moviment", "Moviment:init");
        $router->get("/moviment/pagination/{page}", "Moviment:init");
        $router->post("/moviment/{year}/{month}", "Moviment:balance");
        $router->post("/moviment/summarie", "Moviment:summarie");
        $router->get("/moviment/new", "Moviment:new");
        $router->post("/moviment/load/{id}", "Moviment:load");
        $router->post("/moviment/add", "Moviment:add");
        $router->post("/moviment/save", "Moviment:save");
        $router->post("/moviment/update", "Moviment:update");
        $router->post("/moviment/delete/{id}", "Moviment:delete");


        /** Impressions Screens */
        $router->namespace("_App");
        $router->post("/impression", "Impression:init");


        /** Documentation */
        $router->namespace("_App");
        $router->get("/documentation/init", "Documentation:init");
        $router->get("/documentation/add", "Documentation:add");
        $router->get("/documentation/edit/{id}", "Documentation:edit");
        $router->post("/documentation/save", "Documentation:save");
        $router->post("/documentation/show", "Documentation:show");
        $router->get("/documentation/show/id/{id}", "Documentation:showImage");
        $router->post("/documentation/delete/id/{id}", "Documentation:delete");
        $router->post("/documentation/update", "Documentation:update");


        /** Proof */
        $router->namespace("_App");
        $router->get("/proof", "Proof:init");
        $router->get("/proof/init", "Proof:init");
        $router->post("/proof/year/{year}", "Proof:month");
        $router->post("/proof/proof", "Proof:proof");
        $router->post("/proof/save", "Proof:save");
        $router->post("/proof/show", "Proof:show");
        $router->get("/proof/show/id/{id}", "Proof:showImage");
        $router->post("/proof/edit", "Proof:edit");
        $router->post("/proof/edit/save", "Proof:saveProof");
        $router->post("/proof/delete/{id}", "Proof:delete");


        /** Wallet screens */
        $router->namespace("_App");
        $router->get("/wallet", "Wallet:init");
        $router->post("/wallet", "Wallet:init");


        /** Certificate screens */
        $router->namespace("_App");
        $router->post("/certificate", "Certificate:init");
        $router->get("/certificate", "Certificate:init");
        $router->post("/certificate/validate", "Certificate:validate");


        /** Image */
        $router->namespace("_App");
        $router->get("/image/id/{id}", "Photo:showImage");
        $router->get("/certificate/id/{id}", "Certificate:showImage");
        $router->get("/image/crop", "Photo:crop");
        $router->post("/image/cropped", "Photo:cropped");
        $router->post("/image/lastid", "Photo:lastid");


        /** Logout */
        $router->get("/exit", function() {
            (new Session())->destroy();
            // echo "<script>document.location.reload(true)</script>";
        });


        /** Error Routes */
        $router->namespace("_App")->group("/ops");
        $router->get("/{errcode}", "Web:error");


        /** Routes */
        $router->dispatch();


        /**  Error Redirect */
        if($router->error()) {
            $router->redirect("/ops/{$router->error()}");
        }

    } else {
        (new Web())->start();
    }

    ob_end_flush();
