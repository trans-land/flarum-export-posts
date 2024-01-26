<?php

namespace Bonfire\ExportPosts\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;

class ExportPostSerializer extends AbstractSerializer
{

    protected function getDefaultAttributes($model)
    {
        // TODO: Implement getDefaultAttributes() method.

        return $model->toArray();
    }
}
