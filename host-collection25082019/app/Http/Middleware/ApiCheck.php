<?php

namespace App\Http\Middleware;

use Closure;

use Auth;

class ApiCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //$response = $next($request);

        header('Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyZjM5NGRlNTNiYjI5ZGRiZGZlNmRkZGJjNDQ0ZjczNTM2YjNkODY5ZTc5NGMzOGQyN2Q4MWE5NzZjZmViZmY4N2Y0ZWI3YzQ0MzBhZGFiIn0.eyJhdWQiOiIxIiwianRpIjoiZjJmMzk0ZGU1M2JiMjlkZGJkZmU2ZGRkYmM0NDRmNzM1MzZiM2Q4NjllNzk0YzM4ZDI3ZDgxYTk3NmNmZWJmZjg3ZjRlYjdjNDQzMGFkYWIiLCJpYXQiOjE1NjY0NDAzNDksIm5iZiI6MTU2NjQ0MDM0OSwiZXhwIjoxNTk4MDYyNzQ5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qzFxutjk2b5dHSl_a7pHSLNegrhGy6mRGH3y5li6RZ4P8Y_78ersTtWjsWlAFBtwY71RCmFx-agKlIZvYCUs568D6r68rUKExFEOGBiCURTGMstDuscKJyFUz0JHSxVY706BNo5Cn8ST7sBeCKFKDBxoyGnQasC0_sSRtgW5hJR_7cpelPibpquwG_dHqGS8Lv8YcSmA4yXbwmN4p7wf75zW4UlFQbGkiKrWGOnBJJkwQ3Q6977C6w3X8J7k8az3GSPIyDFsstQ6EB2bU2r_efMUH45LvH-3BbG8p9Meky70ZMah14d5Ad5s_gJofPTCnoPTaaGVoE4K9bH1vkNHJyAku7OqR0jvvRsg-JTWrnJwq-0b5mle-uXGnersWMKEPmlg9lkyhPiaSIvz6DloL_ptVheqBAklCSY-ExXE_P-cMexMB3B0T9t0vDiVV-sGf7tzhGSi8nLsjbmCne2dJQ-icNEsLhKkz5fTkKqBNrKY6R6Ft5OK2VgmT29BANQ8JElNC6pQKizvzTd8HWEtIUryki3cR3CNKGWLbzqlYnKdp-c2cSj1xR-DrHUuCH1G_f0IXjWCN9khopayKvL0F_kGRZS6MyOXcL4gs_1lbGqYUV89VvEKhSZwWTnaurK6x13IZz38gJLunhwSs1XQ5R9N6TCyVYmy5yoN03zeGws');
        header('Accept: application/json');

        return $next($request);
    }
}
