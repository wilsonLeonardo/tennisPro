<?php

namespace App\Http\Middleware;

use App\Model\User;
use Closure;
use Illuminate\Validation\UnauthorizedException;

class CheckUserStatus
{
    public function handle($request, Closure $next)
    {
        $authenticatedUser = $request->user();

        if ($authenticatedUser->profile == 'ADMIN') return $next($request);

        $hasValidUserStatus = User::query()
            ->where('id', $authenticatedUser->id)
            ->where('status', 'ACTIVE')
            ->exists();

        if ($hasValidUserStatus)
        {
            return $next($request);
        }

        throw new UnauthorizedException('STATUS_BLOCKED');
    }
}