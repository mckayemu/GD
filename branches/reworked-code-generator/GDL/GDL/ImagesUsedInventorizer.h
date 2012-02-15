/** \file
 *  Game Develop
 *  2008-2012 Florian Rival (Florian.Rival@gmail.com)
 */


#if defined(GD_IDE_ONLY)

#ifndef IMAGESUSEDINVENTORIZER_H
#define IMAGESUSEDINVENTORIZER_H

#include <string>
#include <vector>
#include <iostream>
#include <set>
#include <boost/shared_ptr.hpp>
#include "GDL/ArbitraryResourceWorker.h"

/**
 * \brief Class used to track all images used in a game.
 */
class ImagesUsedInventorizer : public ArbitraryResourceWorker
{
    public:

        ImagesUsedInventorizer() : ArbitraryResourceWorker() {};
        virtual ~ImagesUsedInventorizer() {};

        std::set<std::string> & GetAllUsedImages() { return allUsedImages; };

        virtual void ExposeResource(std::string & resource) {};
        virtual void ExposeImage(std::string & imageName) {allUsedImages.insert(imageName);};
        virtual void ExposeShader(std::string & shaderName) {};

    protected:
        std::set<std::string> allUsedImages;
};

#endif // IMAGESUSEDINVENTORIZER_H

#endif