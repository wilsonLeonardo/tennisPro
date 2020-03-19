<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Validation\UnauthorizedException;

class CheckSeges
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
        if( ! $request->headers->has('auth-seges') ) {
            throw new UnauthorizedException('Usuário não autenticado.');
        }
        if( $request->header('auth-seges') !== 'seges@123#' ) {
            throw new UnauthorizedException('Usuário não autenticado.');
        }
        return $next($request);
    }
}
