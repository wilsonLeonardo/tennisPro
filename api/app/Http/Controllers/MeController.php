<?php

namespace App\Http\Controllers;

// use App\Events\ClearNotificationEvent;
// use App\Model\Broker;
// use App\Model\Media;
// use App\Model\Offer;
// use App\Model\Proposal;
// use App\Services\MessageService;
use App\Services\UserService;
use App\Traits\RestControllerTrait;
use App\Model\User;
use Illuminate\Http\Request;
// use App\Services\MessageInterestedService;

class MeController extends Controller
{
    use RestControllerTrait;

    public function index()
    {
        $user = User::findOrFail(auth()->user()->getAuthIdentifier());

        $user = $user->toArray();

        return [
            'Username' => $user['username'],
            'Email' => $user['email']
        ];
    }

    public function indexTeacher()
    {
        $user = User::findOrFail(auth()->user()->getAuthIdentifier());

        $user = $user->toArray();

        return [
            "name" => $user['name'],
            "email" => $user['email'],
            "nascimento" => $user['nascimento'],
            "username" => $user['username'],
            "telefone"=> $user['telefone'],
            "preço"=> $user['preço'],
        ];
    }

    public function updateTeacher(Request $request)
    {
        $this->preconditions()
            ->request($request)
            ->rules(User::roles())
            ->messages(User::mappedProperties())
            ->check();
        
        $data = $request->all();
        $data['id'] = auth()->user()->getAuthIdentifier();
 

        return $this->response(UserService::updateTeacher($data));
    }

    // public function offers(Request $request)
    // {
    //     $query = Offer::query()
    //         ->with('city.state')
    //         ->with('product.defaultOfferPicture:id,key')
    //         ->with('pictures')
    //         ->where('user_id', auth()->user()->getAuthIdentifier())
    //         ->orderBy('created_at', 'desc');

    //     if (isset($request->type))
    //     {
    //         $query->where('type', $request->type == 'PURCHASE' ? 'PURCHASE' : 'SALE');
    //     }

    //     return $this->paginate(
    //         $query, 
    //         $request->current_page, 
    //         200, 
    //         Offer::generateS3UrlTransformer()
    //     );
    // }

    // public function proposals(Request $request)
    // {
    //     $query = Proposal::with('offer.pictures')
    //         ->with('offer.product.defaultOfferPicture');

    //     if (isset($request->type))
    //     {
    //         $authUserId =  auth()->user()->getAuthIdentifier();

    //         if ($request->type == 'SENT')
    //         {
    //             $query->where('user_id', $authUserId);
    //         }
    //         else if ($request->type == 'RECEIVED')
    //         {
    //             $query->whereHas('offer', function($query) {
    //                 $query->where('user_id', auth()->user()->getAuthIdentifier());
    //             });
    //         }
    //     }

    //     $query->orderBy('created_at', 'desc');

    //     event(ClearNotificationEvent::of(auth()->user()->getAuthIdentifier(), 'proposals'));

    //     return $this->paginate(
    //         $query,
    //         $request->current_page,
    //         12,
    //         Proposal::generateS3UrlTransformer()
    //     );
    // }

    // public function messages(Request $request)
    // {
    //     event(ClearNotificationEvent::of(auth()->user()->getAuthIdentifier(), 'messages'));

    //     return $this->response(MessageService::findAllByUser(auth()->user()));
    // }
    // public function messagesInterested(Request $request)
    // {
    //     event(ClearNotificationEvent::of(auth()->user()->getAuthIdentifier(), 'messages'));

    //     return $this->response(MessageInterestedService::findAllByUser(auth()->user()));
    // }

    // public function updateAvatar(Request $request, $mediaId)
    // {
    //     $media = Media::findOrFail($mediaId);
    //     $user = User::findOrFail(auth()->user()->getAuthIdentifier());

    //     $user->avatar()->associate($media);

    //     $user->save();
    // }
}
