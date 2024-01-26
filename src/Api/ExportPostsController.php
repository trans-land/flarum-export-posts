<?php

namespace Bonfire\ExportPosts\Api;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;


class ExportPostsController extends AbstractShowController
{
    /**
     * @var Dispatcher
     */
    protected $bus;


    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        // Implement data() method.
        $actor = RequestUtil::getActor($request);
//        $username = Arr::get($request->getQueryParams(), 'username');

        $username = Arr::get($actor,"username");
        $id = Arr::get($actor,"id");
        // TODO: Need to add the database query and return the csv download.

        return die($actor);

    }

}
